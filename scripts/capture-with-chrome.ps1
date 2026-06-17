$ErrorActionPreference = "Continue"

$chrome = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$screenshotDir = Join-Path (Get-Location) "assets\screenshots"
$userDataDir = "C:\tmp\allpage-chrome-profile"

New-Item -ItemType Directory -Force $screenshotDir | Out-Null
New-Item -ItemType Directory -Force $userDataDir | Out-Null

$targets = @(
  @{ repo = "tipofmytouge"; url = "https://tipofmytouge.onrender.com/"; wait = 18 },
  @{ repo = "flanker"; url = "https://jeoungan.github.io/flanker/"; wait = 2 },
  @{ repo = "span_word_ver2"; url = "https://jeoungan.github.io/span_word_ver2/"; wait = 2 },
  @{ repo = "gas_rt"; url = "https://jeoungan.github.io/gas_rt/"; wait = 2 },
  @{ repo = "stairs_of_heaven"; url = "https://jeoungan.github.io/stairs_of_heaven/"; wait = 3 },
  @{ repo = "heart_rate_recorder"; url = "https://jeoungan.github.io/heart_rate_recorder/"; wait = 2 },
  @{ repo = "span_word"; url = "https://jeoungan.github.io/span_word/"; wait = 2 },
  @{ repo = "homepage001"; url = "https://jeoungan.github.io/homepage001/"; wait = 2 },
  @{ repo = "BaBarian"; url = "https://jeoungan.github.io/BaBarian/"; wait = 6 },
  @{ repo = "HSMU_Escape_3D"; url = "https://jeoungan.github.io/HSMU_Escape_3D/"; wait = 7 },
  @{ repo = "Lunch_in_cafe"; url = "https://jeoungan.github.io/Lunch_in_cafe/"; wait = 7 },
  @{ repo = "heartopia_guidebook"; url = "https://jeoungan.github.io/heartopia_guidebook/"; wait = 2 },
  @{ repo = "heart_rate_player"; url = "https://jeoungan.github.io/heart_rate_player/"; wait = 2 },
  @{ repo = "span_number"; url = "https://jeoungan.github.io/span_number/"; wait = 2 },
  @{ repo = "game0505_2"; url = "https://jeoungan.github.io/game0505_2/"; wait = 4 },
  @{ repo = "game0505"; url = "https://jeoungan.github.io/game0505/"; wait = 4 },
  @{ repo = "homepage002"; url = "https://jeoungan.github.io/homepage002/"; wait = 2 },
  @{ repo = "gas_rt_2"; url = "https://jeoungan.github.io/gas_rt_2/"; wait = 2 }
)

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

  if ($target.repo -eq "tipofmytouge") {
    Start-Sleep -Seconds $target.wait
  } else {
    Start-Sleep -Seconds $target.wait
  }

  $args = @(
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--no-first-run",
    "--no-default-browser-check",
    "--user-data-dir=$userDataDir",
    "--window-size=1280,720",
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

$results | ConvertTo-Json -Depth 4 | Set-Content -Encoding UTF8 (Join-Path $screenshotDir "capture-results.json")
$results | ConvertTo-Json -Depth 4
