# Session Write and Read
A simple Express Server for Reading/Writing sessions in NodeJS.
* Setting the Session:
When accessing the /set-session  endpoint, the server sets the "username" and "role" key-value pairs in the *session* object.

* Reading the Session:
When accessing the /read-session endpoint, the server sends to your browser the session values "username" and "role" set if you ran the "/set-session" before, nothing otherwise.

## Getting Started
Follow these steps to get the project up and running:

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone https://github.com/johnnypax/nodejs_express_auth.git
cd 02_session_write_read
```
### 2. Install Dependencies
Once you've navigated into the project directory, install the required dependencies:
```bash
npm install
```
### 4. Start the Project
Now you can run the project using:
```bash
npm start
```
Your application should now be running at http://localhost:3000/.

## The Session middleware settings:
The `session()`` function you're seeing is from the express-session middleware for Express. It creates a session middleware with the given options. Let's go through each option in detail:

* **secret: 'keep_your_secret_key'**
This is used to sign the session ID cookie.
This secret ensures that the session ID sent back to the server on subsequent requests is genuine and not tampered with.
It is crucial to keep this secret actually secret; if someone gains access to it, they can forge session cookies.
* **resave: false**
This option forces the session to be saved back to the session store, even if the session was never modified during the request.
By setting it to false, it means the session will not be saved to the session store if it's not modified. It can be useful for reducing write operations to the store.
* **saveUninitialized: true**
This forces a session that is "uninitialized" to be saved to the store. An uninitialized session is one that is new but not modified.
By setting it to true, it means the session will be saved to the session store even if it hasn’t been modified.
* **cookie: { secure: false }**
This is the settings object for the session ID cookie.
secure: If set to true, the cookie will be marked as secure, which means it will only be transmitted over HTTPS. This ensures that the cookie data isn't exposed to potential attackers that might be listening in on the network. If your application runs under HTTPS (which it should in a production environment), you'll want this set to true. If set to false, the cookie can be transmitted over unsecured HTTP.





## License
This project is licensed under the MIT License.