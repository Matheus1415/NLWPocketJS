import fastify from "fastify";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { createGoalRoute } from "./router/create-goal";
import { createCompletionRoute } from "./router/create-completion";
import { getPendingGoalRoute } from "./router/get-pending-goals";
import { getWeekSummarRoute } from "./router/get-week-summar";
import fastifyCors from "@fastify/cors";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, {
  origin: "*",
  methods: ["GET", "POST"],
})

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPendingGoalRoute)
app.register(getWeekSummarRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server started on port 3333");
});
