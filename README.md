<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Management API</title>
</head>
<body>

<h1>User Management API (Node.js + Express + MongoDB)</h1>

<p>A clean and scalable backend API built with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>, featuring user authentication, profile management, and Todo CRUD functionality.</p>

<hr>

<h2>⭐ Features</h2>
<ul>
  <li>User Registration (with hashed password)</li>
  <li>User Login (JWT authentication)</li>
  <li>Get User Profile (protected route)</li>
  <li>Update User Profile (protected route)</li>
  <li>Todo CRUD (each user can manage their todos)</li>
  <li>Proper input validation and error handling</li>
  <li>Route Not Found handling</li>
  <li>Environment variable support using <code>.env</code></li>
</ul>

<hr>

<h2>🚀 Tech Stack</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB + Mongoose</li>
  <li>JWT Authentication</li>
  <li>bcryptjs</li>
  <li>dotenv</li>
</ul>

<hr>

<h2>📦 Project Setup Steps</h2>

<h3>1. Clone the Repository</h3>
<pre><code>git clone &lt;https://github.com/anushkagurbe/ifas-backend-task.git&gt;</code></pre>

<h3>2. Install Dependencies</h3>
<pre><code>npm install</code></pre>

<h3>3. Configure Environment Variables</h3>
<p>Create a <code>.env</code> file in the project root. Use the provided <code>.env.example</code> as reference.</p>

<h3>4. Start the Server</h3>
<pre><code>node --watch index</code></pre>
<p>Server will run on: <code>http://localhost:8080</code></p>

<hr>

<h2>🔐 Environment Variables Usage</h2>
<table>
  <thead>
    <tr>
      <th>Variable</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PORT</td>
      <td>Port number on which server will run</td>
    </tr>
    <tr>
      <td>DB_URL</td>
      <td>MongoDB database URL (Local or Atlas)</td>
    </tr>
    <tr>
      <td>JWT_SECRET</td>
      <td>Secret used for signing JWT tokens</td>
    </tr>
  </tbody>
</table>

<h3>.env.example</h3>
<pre><code>PORT=8080
MONGO_URL=mongodb://localhost:27017/DB_URL
JWT_SECRET=mysupersecretkey</code></pre>

<hr>

<h2>🧪 API Endpoints (User)</h2>

<h3>1. Register User</h3>
<p><strong>POST</strong> <code>/user/register</code></p>
<pre><code>{
  "name": "test",
  "email": "test@gmail.com",
  "password": "test@test"
}</code></pre>

<h3>2. Login User</h3>
<p><strong>POST</strong> <code>/user/login</code></p>
<p>Response includes JWT token.</p>

<h3>3. Get User Profile</h3>
<p><strong>GET</strong> <code>/user/getuserdetails</code></p>
<p>Headers: <code>Authorization: Bearer &lt;token&gt;</code></p>

<h3>4. Update User Profile</h3>
<p><strong>PUT</strong> <code>/user/updateuserdetails</code></p>
<p>Headers: <code>Authorization: Bearer &lt;token&gt;</code></p>

<hr>

<h2>📝 API Endpoints (Todo)</h2>

<h3>1. Create Todo</h3>
<p><strong>POST</strong> <code>/todo/addtodo</code></p>
<pre><code>{
  "title": "Learn Backend"
}</code></pre>

<h3>2. Get All Todos</h3>
<p><strong>GET</strong> <code>/todo/gettodos</code></p>

<h3>3. Update Todo</h3>
<p><strong>PUT</strong> <code>/todo/updatetodo/:id</code></p>

<h3>4. Delete Todo</h3>
<p><strong>DELETE</strong> <code>/todo/deletetodo/:id</code></p>

<hr>

<h2>🧪 API Testing Instructions</h2>
<p>You can test using <strong>Postman</strong>, <strong>Insomnia</strong>, or Thunder Client.</p>
<ol>
  <li>Register a user</li>
  <li>Login the user</li>
  <li>Copy the token from login response</li>
  <li>Add token in headers: <code>Authorization: Bearer &lt;your_token&gt;</code></li>
  <li>Test profile routes</li>
  <li>Test Todo routes (all are protected)</li>
</ol>

<hr>

<h2>🚫 Route Not Found Handler</h2>
<pre><code>{
  "success": false,
  "message": "Route not found"
}</code></pre>


<hr>

<h2>🎁 Bonus Features Included</h2>
<ul>
  <li>Todo CRUD</li>
  <li>Clean folder structure</li>
  <li>Validations</li>
  <li>Proper error handling</li>
  <li>Postman-ready endpoints</li>
</ul>

</body>
</html>
