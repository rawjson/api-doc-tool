let entities = [
  {
    name: 'Introduction',
    defaultOpen: true,
    description: [
      'This API reference is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
    info: {
      heading: 'Just getting started?',
      description: 'Checkout out our quickstart guide',
      code_box: [{ title: 'base url', rows: ['https://api.yoursite.com'] }],
    },
  },
  {
    name: 'Authentication',
    defaultOpen: true,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    info: {
      code_box: [
        { title: 'Global API Key', rows: ['api_key = "api_xxxxxxx"'] },
        {
          title: 'Authenticating with API Key',
          rows: ['var options = new RequestOptions({ Authorization Bearer = "api_xxxxxxx" })'],
        },
      ],
    },
  },
  {
    name: 'Errors',
    defaultOpen: true,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    attributes: [
      {
        id: 1,
        name: 'type',
        data_type: 'string',
        description:
          'The type of error returned. One of <b><code>api_error</code></b>, <b><code>idempotency_error</code></b>, or <b><code>invalid_request_error</code></b>',
      },
      {
        id: 2,
        name: 'code',
        data_type: 'string',
        description:
          'For some errors that could be handled programmatically, a short string indicating the error code reported.',
      },
      {
        id: 3,
        name: 'message',
        data_type: 'string',
        description:
          'A human-readable message providing more details about the error. These messages may or may not be shown to your users.',
      },
      {
        id: 4,
        name: 'param',
        data_type: 'string',
        description: `If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.`,
      },
    ],
    info: {
      code_box: [
        {
          title: 'http Status code summary',
          rows: [
            '200 - OK &#8212; Everything worked as expected',
            '400 - Bad Request &#8212; The request was unacceptable.',
            '401 - Unauthorized &#8212; No valid API key provided.',
            '402 - Request Failed &#8212; The params were valid but failed.',
            '403 - Forbidden &#8212; The API key doesn`t have permissions.',
            '404 - Not Found &#8212; The requested resource was not found.',
            '409 - Conflict &#8212; The request conflicts with another request.',
            '500 - Server Error &#8212; Something went wrong on the server.',
          ],
        },
      ],
    },
  },
  {
    name: 'Versioning',
    defaultOpen: true,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    info: {
      code_box: [
        {
          title: 'Version Control',
          rows: ['const app = require(`app`)(`api_key = "api_xxxxxxx"`), { apiVersion: `2020-07-05`})'],
        },
      ],
    },
  },
  {
    name: 'Users',
    controller: 'users',
    defaultOpen: true,
    description: [
      'This object represents a customer or user of your business. It lets the user sign up for an account and use your platform or service.',
    ],
    attributes: [
      {
        id: 1,
        name: 'id',
        data_type: 'string',
        description: 'Unique identifier for the object.',
      },
      {
        id: 2,
        name: 'email',
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
          url: '/v1/users/create',
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
              email: 'johndoe@example.com',
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
          url: '/v1/retrieve/:id',
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
              email: 'john@doe.com',
              role: 'User',
              name: 'John Doe',
              country: 'US',
              currency: 'usd',
              stripe_account: 'acct_1KwNp9SAeuU3Auj3',
              customer_id: 'cus_LdlUpmyDkkrIVO',
              emailConfirmed: true,
              createdAt: '5/6/2022, 3:21:41 PM',
              serial_number: 4,
              custom_domain: null,
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
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        endpoint: {
          type: 'patch',
          url: '/v1/update-password',
          parameters: [
            {
              required: true,
              custom: {
                name: 'old_Password',
                data_type: 'string',
                description:
                  'Password used to log in to the app or account dashboard. All passwords are encrypted and stored as a hash in the database.',
              },
            },
            {
              required: true,
              custom: {
                name: 'new_Password',
                data_type: 'string',
                description:
                  'A new password for the account. All passwords are encrypted and stored as a hash in the database.',
              },
            },
          ],
          response: {
            type: 'application/json',
            data: {
              object: 'user',
              id: 'user_V1yINlzRkP34rAVQQV46zS35',
              email: 'johndoe@example.com',
              message: 'password updated successffully',
            },
          },
        },
      },
      {
        id: 4,
        name: 'Update user',
        endpoint: {
          type: 'patch',
          url: '/v1/update/:id',
          parameters: [
            {
              required: false,
              attribute: 9,
            },
            {
              required: false,
              attribute: 2,
            },
            {
              required: false,
              attribute: 5,
            },
            {
              required: false,
              attribute: 7,
            },
            {
              required: false,
              attribute: 12,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'user_jZpaQQuNFLB9EwcWF3aNF9FK',
              email: 'john@doe.com',
              role: 'User',
              name: 'John Doe',
              country: 'US',
              currency: 'usd',
              emailConfirmed: true,
              createdAt: '5/6/2022, 3:21:41 PM',
              serial_number: 4,
              custom_domain: 'johndoe.com',
            },
          },
        },
      },
      {
        id: 5,
        name: 'Update plan of user',
        endpoint: {
          type: 'patch',
          url: '/v1/plan/:id/update',
          parameters: [
            {
              required: false,
              custom: {
                name: 'active',
                data_type: 'boolean',
                description:
                  'The state of user`s plan. Can be either true or false. Plan state updates automatically at midnight everyday.',
              },
            },
            {
              required: false,
              custom: {
                name: 'name',
                data_type: 'enum',
                description:
                  'The name of plan user subscribed to. The plan name can be of enum  <b><code>trial_14</code></b> <b><code>basic</code></b>, <b><code>pro</code></b>, or <b><code>advanced</code></b>',
              },
            },
            {
              required: false,
              custom: {
                name: 'cancel_at_period_end',
                data_type: 'boolean',
                description: 'If updated to true, the plan of user will be deactivated at the end of current period.',
              },
            },
            {
              required: false,
              custom: {
                name: 'sbs_id',
                data_type: 'string',
                description: 'The subscription id of user if using Stripe or any other payment processor.',
              },
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'plan_8zNUDjry8O8p4ZbH5uWKSKQ6',
              active: true,
              name: 'trial_14',
              cancel_at_period_end: false,
              period_start: 1652750039,
              period_end: 1653959639,
              subscription: 'sbs_8zNUDjry8O8p4ZbH5uWKSKQ',
            },
          },
        },
      },
      {
        id: 6,
        name: 'Retrieve plan of user',
        description: 'Returns the current available plan of the user',
        endpoint: {
          type: 'get',
          url: '/v1/plan/:id',
          parameters: [
            {
              required: true,
              custom: {
                name: 'id',
                data_type: 'string',
                description: 'The <b><code>id</code></b> of plan is required in the parameteres to call the plan.',
              },
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'plan_8zNUDjry8O8p4ZbH5uWKSKQ6',
              active: true,
              name: 'pro',
              cancel_at_period_end: false,
              period_start: 1652750039,
              period_end: 1653959639,
              subscription: 'sbs_8zNUDjry8O8p4ZbH5uWKSKQ',
            },
          },
        },
      },
      {
        id: 9,
        name: 'Delete user',
        description: 'Deletes the user with all products, images, files and the associated stripe connected account.',
        endpoint: {
          type: 'delete',
          url: '/v1/:email OR :id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
            {
              required: false,
              attribute: 2,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'user_wOWyhnufTkJGTxE7UdzjD6tQ',
              stripeAccount: {
                deleted: true,
                customer_id: 'cus_LlttKuLXKfM3WV',
                stripe_account: 'acct_1L4M5ZHB49L3ILYE',
              },
              message: 'Accounts deleted',
              deletedProducts: [
                {
                  id: 'prod_Lltzy9FY9SjAX5',
                  message: 'Product deleted',
                },
              ],
            },
          },
        },
      },
    ],
  },
  {
    name: 'Products',
    controller: 'products',
    defaultOpen: true,
    description: [
      'This object represents a customer or user of your business. It lets the user sign up for an account and use your platform or service.',
    ],
    attributes: [
      {
        id: 1,
        name: 'id',
        data_type: 'string',
        description: 'Unique identifier for the object.',
      },
      {
        id: 2,
        name: 'status',
        data_type: 'enum',
        description:
          'Status of the product i.e. <b><code>draft</code></b>, <b><code>active</code></b>, or <b><code>archived</code></b>',
      },
      {
        id: 3,
        name: 'title',
        data_type: 'string',
        description: 'The title of product that is less than 60 characters in length',
      },
      {
        id: 4,
        name: 'description',
        data_type: 'string',
        description: `Description of product, can be an unformatted html content created with a rich text editor.`,
      },
      {
        id: 5,
        name: 'price',
        data_type: 'array',
        description: 'The prices attached to a product.',
      },
      {
        id: 6,
        name: 'images',
        data_type: 'array',
        description: 'An array of image urls attached to a product.',
      },
      {
        id: 7,
        name: 'files',
        data_type: 'array',
        description: 'An array of file urls uploaded for a particular product.',
      },
      {
        id: 8,
        name: 'createdAt',
        data_type: 'timestamp',
        description: 'A unix timestamp generated when the product is created.',
      },
    ],
    services: [
      {
        id: 1,
        name: 'Create a product',
        description:
          'Creates a new product in the database with a unique id. To create a new product provide the paramters listed below.',
        endpoint: {
          type: 'post',
          url: '/v1/products/create',
          parameters: [
            {
              required: false,
              attribute: 2,
            },
            {
              required: false,
              attribute: 3,
            },
            {
              required: false,
              attribute: 4,
            },
            {
              required: false,
              attribute: 5,
            },
            {
              required: false,
              attribute: 6,
            },
            {
              required: false,
              attribute: 7,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'prod_aUOuSXAFyNxko9gevukGm',
              status: 'DRAFT',
              title: 'Lorem ipsum dolor sit amet, consectetur ...',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
              createdAt: 1654574527,
              price: [
                {
                  amount: 9999,
                  currency: 'usd',
                  type: 'one_time',
                  active: true,
                },
                {
                  amount: 5699,
                  currency: 'usd',
                  type: 'one_time',
                  active: false,
                },
              ],

              images: [
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
              ],
              files: [
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
              ],
            },
          },
        },
      },
      {
        id: 2,
        name: 'Create a duplicate product',
        description:
          'Creates a new product in the database with a unique id but same data. To create a duplicate product provide the paramters listed below.',
        endpoint: {
          type: 'post',
          url: '/v1/products/:id/duplicate',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'prod_bUOuSXAFyNxko9gevukGm',
              status: 'DRAFT',
              title: 'Lorem ipsum dolor sit amet, consectetur ...',
              description: 'Lorem ipsum dolor sit amet, consectetur...',
              createdAt: 1654574527,
              price: [
                {
                  amount: 9999,
                  currency: 'usd',
                  type: 'one_time',
                  active: true,
                },
                {
                  amount: 5699,
                  currency: 'usd',
                  type: 'one_time',
                  active: false,
                },
              ],

              images: [
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
              ],
              files: [
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
              ],
            },
          },
        },
      },
      {
        id: 3,
        name: 'Update product',
        description:
          'Updates an already created product in the database. To update product provide the paramters listed below.',
        endpoint: {
          type: 'patch',
          url: '/v1/products/:id/update',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
            {
              required: false,
              attribute: 2,
            },
            {
              required: false,
              attribute: 3,
            },
            {
              required: false,
              attribute: 4,
            },
            {
              required: false,
              attribute: 5,
            },
            {
              required: false,
              attribute: 6,
            },
            {
              required: false,
              attribute: 7,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'prod_bUOuSXAFyNxko9gevukGm',
              status: 'DRAFT',
              title: 'Lorem ipsum dolor sit amet, consectetur ...',
              description: 'Lorem ipsum dolor sit amet, consectetur...',
              createdAt: 1654574527,
              price: [
                {
                  amount: 9999,
                  currency: 'usd',
                  type: 'one_time',
                  active: true,
                },
                {
                  amount: 5699,
                  currency: 'usd',
                  type: 'one_time',
                  active: false,
                },
              ],

              images: [
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
              ],
              files: [
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
              ],
            },
          },
        },
      },
      {
        id: 4,
        name: 'Retrieve product',
        description: 'To retrieve a product from the database, provide the paramters listed below.',
        endpoint: {
          type: 'get',
          url: '/v1/products/:id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'prod_bUOuSXAFyNxko9gevukGm',
              status: 'DRAFT',
              title: 'Lorem ipsum dolor sit amet, consectetur ...',
              description: 'Lorem ipsum dolor sit amet, consectetur...',
              createdAt: 1654574527,
              price: [
                {
                  amount: 9999,
                  currency: 'usd',
                  type: 'one_time',
                  active: true,
                },
                {
                  amount: 5699,
                  currency: 'usd',
                  type: 'one_time',
                  active: false,
                },
              ],

              images: [
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
                'https://images.yoursite.com/xxxxxx',
              ],
              files: [
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
                'https://files.yoursite.com/xxxxxx',
              ],
            },
          },
        },
      },
      {
        id: 5,
        name: 'Retrieve All products',
        description:
          'To retrieve all products from the database or filter them by providing the paramters listed below.',
        endpoint: {
          type: 'get',
          url: '/v1/products',
          parameters: [
            {
              required: false,
              custom: {
                name: 'search',
                data_type: 'string',
                description: 'Use a search string in the query parameters to filter products.',
              },
            },
            {
              required: false,
              custom: {
                name: 'sort_by',
                data_type: 'string',
                description: 'Use a sort enum values in the query parameters to filter products.',
              },
            },
            {
              required: false,
              custom: {
                name: 'skip',
                data_type: 'number',
                description: 'Skip to get to the next page. Only 10 products are returned at one time.',
              },
            },
            {
              required: false,
              custom: {
                name: 'status',
                data_type: 'enum',
                description:
                  'Filter products by providing the status in the query parameters i.e. <b><code>draft</code></b>, <b><code>active</code></b>, or <b><code>archived</code></b>.',
              },
            },
          ],
          response: {
            type: 'application/json',
            data: {
              object: 'products',
              total: 10,
              limit: 10,
              skip: 0,
              data: [
                {
                  id: 'prod_aUOuSXAFyNxko9gevukGm',
                  status: 'DRAFT',
                  title: 'Lorem ipsum dolor sit amet, consectetur ...',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur.....................................................',
                  createdAt: 1654574527,
                  has_more: ['...'],
                },
                {
                  id: 'prod_bUOuSXAFyNxko9gevukGm',
                  status: 'ACTIVE',
                  title: 'Lorem ipsum dolor sit amet, consectetur ...',
                  description: 'Lorem ipsum dolor sit amet, consectetur.....',
                  createdAt: 1654574527,
                  has_more: ['...'],
                },
                {
                  id: 'prod_cUOuSXAFyNxko9gevukGm',
                  status: 'DRAFT',
                  title: 'Lorem ipsum dolor sit amet, consectetur ...',
                  description: 'Lorem ipsum dolor sit amet, consectetur.....',
                  createdAt: 1654574527,
                  has_more: ['...'],
                },
                {
                  id: 'prod_dUOuSXAFyNxko9gevukGm',
                  status: 'ARCHIVED',
                  title: 'Lorem ipsum dolor sit amet, consectetur ...',
                  description: 'Lorem ipsum dolor sit amet, consectetur.....',
                  createdAt: 1654574527,
                  has_more: ['...'],
                },
              ],
            },
          },
        },
      },
      {
        id: 6,
        name: 'Delete product',
        description: 'To delete a product from the database provide the paramters listed below.',
        endpoint: {
          type: 'delete',
          url: '/v1/products/:id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              raw: [],
              affected: 1,
            },
          },
        },
      },
    ],
  },
  {
    name: 'Orders',
    controller: 'orders',
    defaultOpen: false,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
    attributes: [
      {
        id: 1,
        name: 'id',
        data_type: 'string',
        description: 'Unique identifier for the object.',
      },
      {
        id: 2,
        name: 'order_number',
        data_type: 'number',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 3,
        name: 'status',
        data_type: 'string',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 4,
        name: 'created',
        data_type: 'timestamp',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        id: 5,
        name: 'receipt_url',
        data_type: 'string',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 6,
        name: 'cust_email',
        data_type: 'string',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 7,
        name: 'user_id',
        data_type: 'string',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
    services: [
      {
        id: 1,
        name: 'Retrieve order',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        endpoint: {
          type: 'get',
          url: '/v1/orders/:id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'order_SKIyHMnoTD6Pf9kzeaX1l',
              order_number: 53,
              created: 1651049523,
              status: 'complete',
              receipt_url: 'https://orders.yoursite.com/receipts/rec_xxxxx',
              cust_email: 'john@doe.com',
              user_id: 'user_rehLH59kPG4rMuZ3MuZ3',
            },
          },
        },
      },
      {
        id: 2,
        name: 'Retrieve all orders',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        endpoint: {
          type: 'get',
          url: '/v1/orders',
          parameters: [
            {
              required: false,
              attribute: 2,
            },
            {
              required: false,
              attribute: 3,
            },
            {
              required: false,
              attribute: 4,
            },
            {
              required: false,
              attribute: 6,
            },
            {
              required: false,
              attribute: 7,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              total: 154,
              limit: 10,
              skip: 0,
              data: [
                {
                  id: 'order_SKIyHMnoTD6Pf9kzeaX1l',
                  order_number: 53,
                  created: 1651049523,
                  status: 'complete',
                  receipt_url: 'https://orders.yoursite.com/receipts/rec_xxxxx',
                  cust_email: 'john@doe.com',
                  user_id: 'user_rehLH59kPG4rMuZ3MuZ3',
                },
                {
                  id: 'order_bboMuZ3LH59kPG4rehmUK',
                  order_number: 51,
                  created: 1651049377,
                  status: 'incomplete',
                  receipt_url: 'https://orders.yoursite.com/receipts/rec_xxxxx',
                  cust_email: 'john@doe.com',
                  user_id: 'user_rehLH59kPG4rMuZ3MuZ3',
                },
                {
                  id: 'order_xX2nCPwQpG3fZlwxgcO2',
                  order_number: 43,
                  created: 1651030755,
                  status: 'complete',
                  receipt_url: 'https://orders.yoursite.com/receipts/rec_xxxxx',
                  cust_email: 'john@doe.com',
                  user_id: 'user_rehLH59kPG4rMuZ3MuZ3',
                },
                {
                  id: 'order_gVDhNeLEbC8LIvlTZ16EU',
                  order_number: 42,
                  created: 1651030755,
                  status: 'complete',
                  receipt_url: 'https://orders.yoursite.com/receipts/rec_xxxxx',
                  cust_email: 'john@doe.com',
                  user_id: 'user_rehLH59kPG4rMuZ3MuZ3',
                },
                {
                  id: 'order_P3n3IhM4oFDOwJcVvrpGs',
                  order_number: 41,
                  created: 1651030755,
                  status: 'complete',
                  receipt_url: 'https://orders.yoursite.com/receipts/rec_xxxxx',
                  cust_email: 'john@doe.com',
                  user_id: 'user_rehLH59kPG4rMuZ3MuZ3',
                },
              ],
            },
          },
        },
      },
      {
        id: 3,
        name: 'Delete order',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        endpoint: {
          type: 'delete',
          url: '/v1/orders/:id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'order_SKIyHMnoTD6Pf9kzeaX1l',
              order_number: 53,
              created: 1651049523,
              status: 'complete',
              receipt_url: 'https://orders.yoursite.com/receipts/rec_xxxxx',
              cust_email: 'john@doe.com',
              user_id: 'user_rehLH59kPG4rMuZ3MuZ3',
            },
          },
        },
      },
    ],
  },
  {
    name: 'Customers',
    controller: 'customers',
    defaultOpen: true,
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    ],
    attributes: [
      {
        id: 1,
        name: 'id',
        data_type: 'string',
        description: 'Unique identifier for the object.',
      },
      {
        id: 2,
        name: 'address',
        data_type: 'hash',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 3,
        name: 'description',
        data_type: 'string',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 4,
        name: 'email',
        data_type: 'string',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        id: 5,
        name: 'name',
        data_type: 'string',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 6,
        name: 'phone',
        data_type: 'string',
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      {
        id: 7,
        name: 'created',
        data_type: 'timsestamp',
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
    services: [
      {
        id: 1,
        name: 'Create a customer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        endpoint: {
          type: 'post',
          url: '/v1/customers/create',
          parameters: [
            {
              required: true,
              attribute: 4,
            },
            {
              required: false,
              attribute: 5,
            },
            {
              required: false,
              attribute: 6,
            },
            {
              required: false,
              attribute: 2,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'cus_9utnxg47pWjV1e',
              object: 'customer',
              address: null,
              balance: 0,
              created: 1484209932,
              currency: 'usd',
              default_source: null,
              delinquent: true,
              description: 'My First Test Customer ',
              discount: null,
              email: null,
              name: null,
              next_invoice_sequence: 125356,
              phone: null,
            },
          },
        },
      },
      {
        id: 2,
        name: 'Retrieve a customer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        endpoint: {
          type: 'get',
          url: '/v1/customers/:id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'cus_9utnxg47pWjV1e',
              object: 'customer',
              address: null,
              balance: 0,
              created: 1484209932,
              currency: 'usd',
              default_source: null,
              delinquent: true,
              description: 'My First Test Customer ',
              discount: null,
              email: null,
              name: null,
              next_invoice_sequence: 125356,
              phone: null,
            },
          },
        },
      },
      {
        id: 3,
        name: 'Update a customer',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        endpoint: {
          type: 'patch',
          url: '/v1/customers/:id',
          parameters: [
            {
              required: true,
              attribute: 1,
            },
            {
              required: false,
              attribute: 2,
            },
            {
              required: false,
              attribute: 3,
            },
            {
              required: false,
              attribute: 4,
            },
            {
              required: false,
              attribute: 5,
            },
            {
              required: false,
              attribute: 6,
            },
          ],
          response: {
            type: 'application/json',
            data: {
              id: 'cus_9utnxg47pWjV1e',
              object: 'customer',
              address: null,
              balance: 0,
              created: 1484209932,
              currency: 'usd',
              default_source: null,
              delinquent: true,
              description: 'My First Test Customer ',
              discount: null,
              email: null,
              name: null,
              next_invoice_sequence: 125356,
              phone: null,
            },
          },
        },
      },
    ],
  },
];

export default entities;
