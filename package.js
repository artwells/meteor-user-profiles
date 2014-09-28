Package.describe({
  summary: "Allows users to publish, and friend",
  version: "0.0.1",
  git: "https://github.com/artwells/meteor-user-profiles.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['accounts-base', 'accounts-password'], 'client');
  api.use(['accounts-base'], 'server');
  api.add_files('user-profiles-client.js', 'client');
});

Package.on_test(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['accounts-base', 'accounts-password', 'tinytest'], ['client','server']);
  /*
  api.add_files('accounts-guest-client.js', ['client','server']);
  api.add_files('accounts-guest-server.js', 'server');
  api.add_files('accounts-guest-client-tests.js', 'client');
  api.add_files('accounts-guest-server-tests.js', 'server');
  */
});
