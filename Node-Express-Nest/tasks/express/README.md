## ✅ **Express.js**

### 🧪 **General Tasks (Out of ToDo context):**

1. **Task 1: Middleware Playground**
   Create and register middlewares: logger, timer, custom header injector.
   Log the sequence of execution for each request.

2. **Task 2: Params and Queries Challenge with Validation**
   Create a route `/users/:id?active=true`

   - Extract both `req.params` and `req.query`
   - Validate:

     - `id` must be a number
     - `active` must be `"true"` or `"false"`
       Return a message like: `User 42 is active`.

3. **Task 3: Centralized Error Handler**
   Throw errors from routes and handle them using a custom error middleware.
   Format the output as `{ status, message, timestamp }`.

---

### ✅ **ToDo-Specific Tasks (Express style):**

4. **Task 4: Wire Up ToDo REST API**
   Use Express to serve the ToDo endpoints.
   Import shared `todoService` logic from Node phase.
   Add middleware for request validation (e.g., title must exist).

5. **Task 5: Request Logging and Metrics Middleware**
   Implement a middleware to log request details and track basic stats (e.g., total requests, average response time).
   Expose `/metrics` endpoint to view them.
