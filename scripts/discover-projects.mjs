const owner = "jeoungan";
const repos = [
  "flanker",
  "span_word_ver2",
  "gas_rt",
  "stairs_of_heaven",
  "heart_rate_recorder",
  "span_word",
  "homepage001",
  "BaBarian",
  "HSMU_Escape_3D",
  "Lunch_in_cafe",
  "heartopia_guidebook",
  "heart_rate_player",
  "tipofmytouge",
  "span_number",
  "game0505_2",
  "game0505",
  "homepage002",
  "gas_rt_2"
];

async function requestJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "allpage-project-discovery"
    }
  });

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      url
    };
  }

  return {
    ok: true,
    status: response.status,
    url,
    data: await response.json()
  };
}

async function requestHead(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      headers: {
        "User-Agent": "allpage-project-discovery"
      }
    });

    return {
      ok: response.ok,
      status: response.status,
      url: response.url,
      contentType: response.headers.get("content-type") || ""
    };
  } catch (error) {
    return {
      ok: false,
      status: 0,
      url,
      error: error.message
    };
  }
}

async function discoverRepo(repo) {
  const repoResult = await requestJson(`https://api.github.com/repos/${owner}/${repo}`);
  const pagesResult = await requestJson(`https://api.github.com/repos/${owner}/${repo}/pages`);
  const fallbackUrl = `https://${owner}.github.io/${repo}/`;
  const pagesUrl = pagesResult.ok && pagesResult.data.html_url
    ? pagesResult.data.html_url
    : fallbackUrl;
  const deployment = await requestHead(pagesUrl);

  return {
    repo,
    githubUrl: repoResult.ok ? repoResult.data.html_url : `https://github.com/${owner}/${repo}`,
    description: repoResult.ok ? repoResult.data.description : "",
    language: repoResult.ok ? repoResult.data.language : "",
    updatedAt: repoResult.ok ? repoResult.data.updated_at : "",
    pagesUrl,
    pagesApiStatus: pagesResult.status,
    deployed: deployment.ok,
    deployment
  };
}

async function discoverTipTree() {
  const treeResult = await requestJson(
    `https://api.github.com/repos/${owner}/tipofmytouge/git/trees/main?recursive=1`
  );

  if (!treeResult.ok) {
    return treeResult;
  }

  const files = treeResult.data.tree
    .filter((item) => item.type === "blob")
    .map((item) => item.path);

  return {
    ok: true,
    files: files.filter((path) => {
      const lower = path.toLowerCase();
      return (
        lower.includes("아") ||
        lower.endsWith(".mp4") ||
        lower.endsWith(".webm") ||
        lower.endsWith(".mov") ||
        lower.endsWith(".png") ||
        lower.endsWith(".jpg") ||
        lower.endsWith(".jpeg")
      );
    })
  };
}

const [projects, tipTree] = await Promise.all([
  Promise.all(repos.map(discoverRepo)),
  discoverTipTree()
]);

console.log(JSON.stringify({ owner, projects, tipTree }, null, 2));
