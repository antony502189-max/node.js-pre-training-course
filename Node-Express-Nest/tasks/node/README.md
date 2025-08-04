## ✅ **Node.js**

### 🧪 **General Tasks (Out of ToDo context):**

1. **Task 1: Implement a Custom Event Emitter**
   Build a simple pub-sub system using `EventEmitter`. Simulate a basic messaging system where listeners react to specific events.

2. **Task 2: File Stream Transformer**
   Read a `.csv` file, apply a transformation (e.g., capitalize names), and write the result to a new file using `fs.createReadStream`, `Transform`, and `createWriteStream`.

3. **Task 3: Event Loop Starter Pack + Debug Broken Async Code**

   - Having messy async code snippet with `setTimeout`, `Promise`, `fs`, and callbacks.
   - Trace **execution order** and fix logic bugs.
   - Brief walkthrough of the event loop phases: timers, pending callbacks, I/O, etc.

---

### ✅ **ToDo-Specific Tasks (Node style):**

4. **Task 4: Build a Mini HTTP Server for ToDos**
   Create a RESTful API using Node's `http` module and `url` parsing.
   Support CRUD using in-memory storage. Manually route based on method and path.

5. **Task 5: Log ToDo Events with EventEmitter**
   Extend Task 4 with `EventEmitter`. Emit and log events like `todoCreated`, `todoDeleted`.
