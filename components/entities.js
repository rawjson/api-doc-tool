const entities = [
  {
    id: 1,
    name: 'Users',
    controller: 'users',
    defaultOpen: false,
    description:
      'This object represents a customer or user of your business. It lets the user sign up for an account and use your platform or service.',
    attributes: [
      {
        id: 1,
        name: 'id',
        data_type: 'string',
        description: 'Unique identifier for the object.',
      },
      {
        id: 2,
        name: 'username',
        data_type: 'string',
        description: 'Unique email address that belongs to the user.',
      },
      {
        id: 3,
        name: 'password',
        data_type: 'string',
        description:
          'Password used to log in to the app or account dashboard. All passwords are encrypted and stored as a hash in the database.',
      },
      {
        id: 4,
        name: 'role',
        data_type: 'enum',
        description: `Role of user with enum values <b><code>Admin</code></b> or <b><code>User</code></b>.`,
      },
      {
        id: 5,
        name: 'name',
        data_type: 'string',
        description: 'Name of your user captured during signup for marketing and communication.',
      },
      {
        id: 6,
        name: 'country',
        data_type: 'string',
        description: "Two letter ISO code of the user's country.",
      },
      {
        id: 7,
        name: 'currency',
        data_type: 'enum',
        description:
          'Accepts a three letter ISO code for example <code>usd</code>. The default currency in which your user intends to do business. Once set, this will apply to all the prices unless changed.',
      },
      {
        id: 8,
        name: 'stripe_account',
        data_type: 'string',
        description: 'The stripe connected account id of the user. This is created during the signup process.',
      },
      {
        id: 9,
        name: 'emailConfirmed',
        data_type: 'boolean',
        description:
          'Determines whether the user is allowed to sign in to the account. Defaults to false when the account is created.',
      },
      {
        id: 10,
        name: 'createdAt',
        data_type: 'string',
        description:
          'Date string with <code>Asia/calcutta</code> zone stored in local format to know exactly when the account was created.',
      },
      {
        id: 11,
        name: 'serial_number',
        data_type: 'number',
        description: 'Serial numbers are automatically generated and increment by 1, used for pagination and sorting.',
      },
      {
        id: 12,
        name: 'custom domain',
        data_type: 'string',
        description: 'A custom domain that belongs to the user. This defaults to null during signup.',
      },
    ],
    services: [
      {
        id: 1,
        name: 'Create a user',
        description:
          'Creates a new user in the database with a unique email address. To create a new user provide the paramters listed below.',
        endpoint: {
          type: 'post',
          url: '/users/create',
          parameters: [
            {
              required: true,
              attribute: 2,
            },
            {
              required: true,
              attribute: 3,
            },
            {
              required: true,
              attribute: 5,
            },
            {
              required: true,
              attribute: 6,
            },
            {
              required: true,
              attribute: 7,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              object: 'user',
              id: 'user_V1yINlzRkP34rAVQQV46zS35',
              username: 'johndoe@example.com',
              role: 'User',
              name: 'John Doe',
              country: 'US',
              currency: 'usd',
              createdAt: '5/14/2022, 3:06:09 PM',
              stripe_account: null,
              customer_id: null,
              custom_domain: null,
              emailConfirmed: false,
              serial_number: 7,
              plan: {
                id: 'plan_No3rFSvK8nyFX3Hg0ErtaS2V',
                name: 'trial_14',
                period_start: 1652520969,
                period_end: 1653039369,
                subscription: null,
                cancel_at_period_end: false,
                active: true,
              },
            },
          },
        },
      },
      {
        id: 2,
        name: 'Retrieve a user',
        description: 'Retrieves an existing user from the database when id is provided.',
        endpoint: {
          type: 'get',
          url: '/retrieve/:id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'user_jZpaQQuNFLB9EwcWF3aNF9FK',
              username: 'dockefy@gmail.com',
              role: 'User',
              name: 'dockefy@gmail.com',
              country: 'IN',
              currency: 'inr',
              stripe_account: 'acct_1KwNp9SAeuU3Auj3',
              customer_id: 'cus_LdlUpmyDkkrIVO',
              emailConfirmed: true,
              createdAt: '5/6/2022, 3:21:41 PM',
              serial_number: 4,
              custom_domain: null,
              store: {
                id: 'store_K79iqsIGo81wonLypHuekhzd',
                logo_url: null,
                store_email: 'dockefy@gmail.com',
                show_email: false,
                store_phone: '+1-800-123-4567',
                show_phone: false,
                store_name: 'navdesigner',
                footer_links: null,
                facebook: false,
                facebook_url: null,
                instagram: false,
                instagram_url: null,
                twitter: false,
                twitter_url: null,
                show_banner: true,
                banner_url: null,
              },
              plan: {
                id: 'plan_F57wng8YGPUvh9zYMhUJwHcP',
                name: 'basic_monthly',
                cancel_at_period_end: false,
                period_start: 1652083653,
                period_end: 1654762053,
                active: true,
                subscription: 'sub_1KxRcvSB9PbMyt5NdiKWUCqJ',
              },
            },
          },
        },
      },

      {
        id: 3,
        name: 'Update password of user',
        endpoint: {
          type: 'patch',
          url: '/update-password',
          parameters: [],
          response: `{
            "id": "user_
          }`,
        },
      },
      {
        id: 4,
        name: 'Update user',
        endpoint: {
          type: 'patch',
          url: '/update/:id',
          parameters: [],
          response: `{
            "id": "user_
          }`,
        },
      },
      {
        id: 5,
        name: 'Update plan of user',
        endpoint: {
          type: 'patch',
          url: '/plan/update/:id',
          parameters: [],
          response: `{
            "id": "user_
          }`,
        },
      },
      {
        id: 6,
        name: 'Retrieve plan of user',
        description: 'Returns the current available plan of the user',

        endpoint: {
          type: 'get',
          url: '/plan',
          parameters: [],
          response: `{
            "id": "user_
          }`,
        },
      },
      {
        id: 7,
        name: 'Retrieve custom domain',
        description: 'Returns the id, custom domain name of the user',
        endpoint: {
          type: 'get',
          url: '/custom-domain',
          parameters: [],
        },
      },
      {
        id: 9,
        name: 'Delete user',
        description: 'Deletes the user with all products, images, files and the associated stripe connected account.',
        endpoint: {
          type: 'delete',
          url: '/:username',
          parameters: [],
        },
      },
    ],
  },
];

export default entities;
