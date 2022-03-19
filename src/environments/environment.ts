// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // CURRENT_URL: 'http://192.168.43.122:8081/api',
  // CURRENT_URL: 'http://172.16.17.90:8081/api',
  CURRENT_URL: 'https://dev.freexitnow.com/api',
  // CURRENT_URL: 'https://api.freexitnow.com/api',
  // GEOCODE_URL: 'http://api.positionstack.com/v1/forward?access_key=b408afada2448b6a284a157fed590d54',
  GEOCODE_URL: 'http://www.mapquestapi.com/geocoding/v1/address?key=BAaW4AMryTj4jnU7EG64aM1uQVRqfbp9',
  // GEO_KEY: 'b408afada2448b6a284a157fed590d54'
  MAPQUEST_KEY: 'KiQNd0lmIWGmm4MU',
  PAYSTACK_SECRET_KEY: 'sk_test_855292313b6a0fb57de810da7a2e7c26615068ee',
  PAYSTACK_KEY: 'pk_test_a5f258219d8b3bc1df69a83f6b8c2dd0d36b506f',
  // PAYSTACK_SECRET_KEY: 'sk_test_4e8d34ef9faa3d54e21e977e9126235fca74ce1f',
  // PAYSTACK_KEY: 'pk_test_6a8eb7d53f4187cc1bb9373d71f25f2d9c5c45be',
  PAYSTACK_TEST_PUBLIC_KEY: 'pk_test_a5f258219d8b3bc1df69a83f6b8c2dd0d36b506f',
  PAYSTACK_TEST_SECRET_KEY: 'sk_test_855292313b6a0fb57de810da7a2e7c26615068ee',

  // FLUTTERWAVE_KEY: 'FLWPUBK-8aed0bf1fdd5b67b3a5e1cd31f91700d-X',
  // FLUTTERWAVE_ENCRYPTION: 'bacd7459a5e5448560e0c8d9',
  FLUTTERWAVE_KEY: 'FLWPUBK_TEST-0d6991be7e23edefb730d387a8cac8e1-X',
  // FLUTTERWAVE_SECRET_KEY='FLWSECK_TEST-38ab688233acef4b0e05897fa2a7232e-X',
  FLUTTERWAVE_ENCRYPTION: 'FLWSECK_TEST0f01c34a9d58',
  // FLUTTERWAVE_HASH: 'I_believe_in_HIM_4-Eva!',

  //============================================================
  // GOOGLE_API_KEY='AIzaSyAbusiq_vtdy2pKFwWbjxiwtdbZNn9q-8s',
  API_KEY: 'PEACE-e6db11d1f8a6208de8cb-Z',
  GOOGLE_MAP_API_KEY: 'AIzaSyDqgx6vJ32-zftpVRgo7p2lfKsoAT9QO1s',
  GEO_KEY: 'b408aAIzaSyDqgx6vJ32-zftpVRgo7p2lfKsoAT9QO1sfada2448b6a284a157fed590d54',
};

