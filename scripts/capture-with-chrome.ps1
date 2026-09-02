param(
  [switch]$OnlyGames,
  [string[]]$Projects
)

$ErrorActionPreference = "Continue"

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$screenshotDir = Join-Path (Get-Location) "assets\screenshots"
$userDataDir = "C:\tmp\allpage-chrome-profile"

New-Item -ItemType Directory -Force $screenshotDir | Out-Null
New-Item -ItemType Directory -Force $userDataDir | Out-Null

$targets = @(
  @{ repo = "tipofmytouge"; url = "https://tipofmytouge.onrender.com/"; wait = 18; kind = "game" },
  @{ repo = "over_the_rainbow"; url = "https://jeoungan.github.io/over_the_rainbow/"; wait = 6; kind = "game" },
  @{ repo = "flanker"; url = "https://jeoungan.github.io/flanker/"; wait = 7; kind = "experiment" },
  @{ repo = "span_word_ver2"; url = "https://jeoungan.github.io/span_word_ver2/"; wait = 2; kind = "experiment" },
  @{ repo = "gas_rt"; url = "https://jeoungan.github.io/gas_rt/"; wait = 2; kind = "experiment" },
  @{ repo = "stairs_of_heaven"; url = "https://jeoungan.github.io/stairs_of_heaven/"; wait = 3; kind = "game" },
  @{ repo = "heart_rate_recorder"; url = "https://jeoungan.github.io/heart_rate_recorder/"; wait = 2; kind = "tool" },
  @{ repo = "span_word"; url = "https://jeoungan.github.io/span_word/"; wait = 7; kind = "experiment" },
  @{ repo = "homepage001"; url = "https://jeoungan.github.io/homepage001/"; wait = 2; kind = "site" },
  @{ repo = "BaBarian"; url = "https://jeoungan.github.io/BaBarian/"; wait = 6; kind = "game" },
  @{ repo = "HSMU_Escape_3D"; url = "https://jeoungan.github.io/HSMU_Escape_3D/"; wait = 7; kind = "game" },
  @{ repo = "Lunch_in_cafe"; url = "https://jeoungan.github.io/Lunch_in_cafe/"; wait = 7; kind = "game" },
  @{ repo = "heartopia_guidebook"; url = "https://jeoungan.github.io/heartopia_guidebook/"; wait = 2; kind = "site" },
  @{ repo = "heart_rate_player"; url = "https://jeoungan.github.io/heart_rate_player/"; wait = 2; kind = "tool" },
  @{ repo = "span_number"; url = "https://jeoungan.github.io/span_number/"; wait = 7; kind = "experiment" },
  @{ repo = "game0505_2"; url = "https://jeoungan.github.io/game0505_2/"; wait = 4; kind = "game" },
  @{ repo = "game0505"; url = "https://jeoungan.github.io/game0505/"; wait = 4; kind = "game" },
  @{ repo = "homepage002"; url = "https://jeoungan.github.io/homepage002/"; wait = 2; kind = "site" },
  @{ repo = "gas_rt_2"; url = "https://jeoungan.github.io/gas_rt_2/"; wait = 2; kind = "game" },
  @{ repo = "moa"; url = "https://oneul-summer-2607.hsmu-makers.chatgpt.site/"; wait = 4; kind = "site" },
  @{ repo = "jaljatneag"; url = "https://jaljatnaeng-2607.hsmu-makers.chatgpt.site/"; wait = 4; kind = "tool" },
  @{ repo = "money_noise"; url = "https://jjalangjjalang-2607.hsmu-makers.chatgpt.site/"; wait = 4; kind = "tool" },
  @{ repo = "arrow_unbound"; url = "https://jeoungan.github.io/arrow_unbound/"; wait = 2; kind = "game" },
  @{ repo = "Awakend_Board"; url = "https://jeoungan.github.io/Awakend_Board/"; wait = 12; kind = "game" },
  @{ repo = "neon_wave"; url = "https://jeoungan.github.io/neon_wave/"; wait = 2; kind = "game" },
  @{ repo = "prisom_foundry"; url = "https://jeoungan.github.io/prisom_foundry/"; wait = 2; kind = "game" },
  @{ repo = "purlse_hopes"; url = "https://jeoungan.github.io/purlse_hopes/"; wait = 2; kind = "game" },
  @{ repo = "spectrum_drill"; url = "https://jeoungan.github.io/spectrum_drill/"; wait = 2; kind = "game" },
  @{ repo = "star_library"; url = "https://jeoungan.github.io/star_library/"; wait = 3; kind = "game" },
  @{ repo = "together"; url = "https://jeoungan.github.io/together/"; wait = 3; kind = "game" },
  @{ repo = "library_inventory_check"; url = "https://jeoungan.github.io/library_inventory_check/"; wait = 5; kind = "tool" }
)

if ($OnlyGames) {
  $targets = $targets | Where-Object { $_.kind -eq "game" }
}

if ($Projects) {
  $selectedProjects = $Projects | ForEach-Object { $_ -split "," } | Where-Object { $_ }
  $targets = $targets | Where-Object { $_.repo -in $selectedProjects }
}

$results = @()

foreach ($target in $targets) {
  $status = 0
  $ok = $false
  $title = ""
  $errorMessage = ""
  $path = Join-Path $screenshotDir "$($target.repo).png"

  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri $target.url -TimeoutSec 45
    $status = [int]$response.StatusCode
    $ok = $status -ge 200 -and $status -lt 400
    if ($response.Content -match "<title>(.*?)</title>") {
      $title = [System.Net.WebUtility]::HtmlDecode($Matches[1])
    }
  } catch {
    $errorMessage = $_.Exception.Message
  }

  $args = @(
    "--headless=new",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    "--user-data-dir=$userDataDir",
    "--window-size=1280,720",
    "--run-all-compositor-stages-before-draw",
    "--virtual-time-budget=$($target.wait * 1000)",
    "--screenshot=$path",
    $target.url
  )

  & $chrome @args | Out-Null
  $exists = Test-Path $path

  $results += [pscustomobject]@{
    repo = $target.repo
    url = $target.url
    status = $status
    ok = $ok -and $exists
    title = $title
    screenshot = $path
    screenshotExists = $exists
    error = $errorMessage
  }
}

if (-not $OnlyGames -and -not $Projects) {
  $results | ConvertTo-Json -Depth 4 | Set-Content -Encoding UTF8 (Join-Path $screenshotDir "capture-results.json")
}

$results | ConvertTo-Json -Depth 4
