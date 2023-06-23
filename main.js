const bandera = document.getElementById("bandera");
bandera.style.display = "none";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f5360121b3msh4de284bbfe15b3dp1527a5jsn34d1397228d6",
    "X-RapidAPI-Host":
      "ipgeolocation-ip-geolocation-ip-geolocation.p.rapidapi.com",
  },
};

// consulta a api location
const fetchIpInfo = (ip) => {
  return fetch(
    `http://api.ipstack.com/${ip}?access_key=4b4803e27ce9ceadcd4cc415d4197343`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const $ = (selector) => document.querySelector(selector);

const $form = $("#form");
const $input = $("#input");
const $Submit = $("#submit");
const $results = $("#results");

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { value } = $input;
  if (!value) return;

  $Submit.setAttribute("disabled", "");
  $Submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  console.log(ipInfo.location.country_flag);

  bandera.style.display = "block";
  bandera.src = ipInfo.location.country_flag;

  if (ipInfo) {
    $results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  $Submit.removeAttribute("disabled");
  $Submit.removeAttribute("aria-busy");
});
