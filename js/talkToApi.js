function getUserGeoLocation(platform) {
  // try to discover the platform based on the subdomain
  if (!platform) {
    platform = window.location.hostname.split('.', 1).join();
  }

  return fetch('https://jamon-api.codecentric.rocks/dev/description?platform=' + platform).then(function(
    response
  ) {
    return response.json();
  });
}
