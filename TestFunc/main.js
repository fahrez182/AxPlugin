console.log("Hello");
if (Axeron) {
  console.log("Axeron Supported");
  if (Axeron.isFloating()) {
    console.log("Mode Floating");
  } else {
    console.log("Tidak dalam mode Floating");
  }
}

document.addEventListener("AXFeatureLoaded", function () {
  console.log("Axeron Loaded");
  document.getElementById("myImg").src = "ax://plugin.stream/banner.png";
  init();
});

async function init() {
  const result = await Shell.exec("kocak");
  document.getElementById("output").innerText = `
Await Result:
${result}
${PluginInfo.config.minWidth}
  `;
}

async function runShell() {
  console.log("Tombol 1");
  const result = await Shell.exec("echo hallo");
  document.getElementById("output").innerText = "Await Result:\n" + result;
}

async function runShellRaw() {
  const { stdout: result, pid } = await Shell.exec("echo hello").raw();
  document.getElementById(
    "output"
  ).innerText = `Await Result:\n${result}\nPID: ${pid}`;
}

function runShellWithId() {
  document.getElementById("myImg").src =
    "ax://package.icon/com.fahrezone.gamevortex";
  Shell.exec("echo hallo")
    .id("test_cb")
    .output((stdout, stderr, code, pid) => {
      document.getElementById("output").innerText = `
        With ID:
        stdout: ${stdout}
        stderr: ${stderr}
        exitCode: ${code}
        pid: ${pid}
      `.trim();
    });
}

function getInfo() {
  const packageInfo = PackageManager.getPackageInfo("com.fahrezone.gamevortex");
  if (!packageInfo) {
    document.getElementById("output").innerText = "PackageNotAvailable";
    return;
  }
  document.getElementById("myImg").src = packageInfo.icon;
  document.getElementById("output").innerText = JSON.stringify(
    packageInfo,
    null,
    2
  );
}

async function getUserPackages(withInfo) {
  const packages = await PackageManager.getUserPackages(withInfo);
  document.getElementById("output").innerText = JSON.stringify(
    packages,
    null,
    2
  );
}

async function getSystemPackages(withInfo) {
  const packages = await PackageManager.getSystemPackages(withInfo);
  document.getElementById("output").innerText = JSON.stringify(
    packages,
    null,
    2
  );
}

async function getAddedPackages(withInfo) {
  const packages = await PackageManager.getAddedPackages(withInfo);
  const container = document.getElementById("output");
  container.innerHTML = "";

  packages.forEach((app) => {
    const card = document.createElement("div");
    card.className = "app-card";

    card.innerHTML = `
        <div class="app-header">
          <img src="${app.icon}" onerror="this.src='fallback.png'" alt="${app.label}" />
          <div class="app-info">
            <div class="app-name">${app.label}</div>
            <div class="app-package">${app.package}</div>
          </div>
        </div>
        <div class="app-meta">
          Versi: ${app.version}<br/>
          UID: ${app.uid}<br/>
          <span class="energy-tag">Energy: ${app.energy}</span>
        </div>
      `.trim();

    container.appendChild(card);
  });
}

async function getPackagesByUid(uid, withInfo) {
  const packages = await PackageManager.getPackagesByUid(uid, withInfo);
  document.getElementById("output").innerText = JSON.stringify(
    packages,
    null,
    2
  );
}

async function openApollo() {
  if (!Axeron.openApollo("com.garena.game.codm")) {
    Axeron.toast("Failed");
  }
}

function showPrompt() {
  let userInput = prompt("Masukan nama:", "Anonim");
  Toast.show("Nama: ", userInput);
}

function openLink() {
  Shell.exec(
    "am start -a android.intent.action.VIEW -d 'https://fahrezone.dev/'"
  );

  Toast.show("clicked");
}

function exit() {
  let result = confirm("Are you sure you want to exit?");
  console.log(result);
  if (result == true) {
    Axeron.finish();
  }
}
