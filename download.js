const https = require('https');
const fs = require('fs');

const download = (url, dest) => new Promise((resolve, reject) => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
      return download(res.headers.location, dest).then(resolve).catch(reject);
    }
    const file = fs.createWriteStream(dest);
    res.pipe(file);
    file.on('finish', () => { file.close(); resolve(); });
  }).on('error', reject);
});

const run = async () => {
  try {
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/512px-Microsoft_Azure.svg.png', 'public/images/azure.png');
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/512px-Docker_%28container_engine%29_logo.svg.png', 'public/images/docker.png');
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/512px-Kubernetes_logo_without_workmark.svg.png', 'public/images/kubernetes.png');
    await download('https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png', 'public/images/powershell.png');
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/512px-Tux.svg.png', 'public/images/linux.png');
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grafana_icon.svg/512px-Grafana_icon.svg.png', 'public/images/grafana.png');
    await download('https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/512px-Windows_logo_-_2012_%28dark_blue%29.svg.png', 'public/images/windows.png');
    console.log("Images downloaded.");
  } catch (e) {
    console.error("Error downloading:", e);
  }
};
run();
