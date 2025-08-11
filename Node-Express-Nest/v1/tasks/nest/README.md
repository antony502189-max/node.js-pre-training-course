## ✅ **NestJS**

### 🧪 **General Tasks (Out of ToDo context):**

1. **Task 1: Modular NestJS Setup**
   Create a `MathModule` and a `LoggerModule`.
   Inject a `LoggerService` into a controller and a separate service.
   Emphasize:

   - Modularity via `@Module`
   - Dependency graph via `@Injectable`
   - Feature encapsulation and reusability

2. **Task 2: Dependency Injection Chain**
   Build a chain of services where `AuditService` depends on `UserService`, which depends on `LoggerService`.
   Focus on constructor-based DI and testing this with mocks.

3. **Task 3: Request Lifecycle Exploration**
   Add a `Guard`, `Pipe`, and `Interceptor` to a route.
   Log each stage. Show the exact order of execution.
   Bonus: Block access with a guard under certain conditions.

---

### ✅ **ToDo-Specific Tasks (NestJS style):**

4. **Task 4: Setup ToDo CRUD with DTOs**
   Create a `TodoModule` with `TodoController` and `TodoService`.

   - Use `CreateTodoDto` and `UpdateTodoDto` with `class-validator`
   - Integrate `ValidationPipe`
   - Focus on proper route + DTO structure

5. **Task 5: ORM Integration with DTO Mapping**
   Use TypeORM (or Prisma if preferred) to persist ToDos.

   - Map DTOs to entities (`TodoEntity`)
   - Use repository pattern
   - Show how to transform between DB models and external responses
