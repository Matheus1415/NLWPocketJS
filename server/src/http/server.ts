import fastify from "fastify";
import { createGoal } from "../function/create-goal";
import z from "zod";
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from "fastify-type-provider-zod";
import { getWeekPedingGoals } from "../function/get-week-peding-goals";
import { createGoalCompletion } from "../function/create-goal-completion";

// Cria a instância do Fastify com o tipo de provedor Zod
const app = fastify().withTypeProvider<ZodTypeProvider>();

// Configura o compilador de validador e serializador
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get('/pending-goals', async () => {
  const { pedingGoals } = await getWeekPedingGoals();
  return pedingGoals
})

// Define o schema para o endpoint POST
app.post('/goals', {
  schema: {
    body: z.object({
      title: z.string(),
      desiredWeeklyFrequency: z.number().int().min(1).max(7),
    })
  }
}, async (request) => {
  // Desestrutura o corpo da requisição
  const { title, desiredWeeklyFrequency } = request.body;
  
  // Chama a função para criar o goal
  await createGoal({
    title,
    desiredWeeklyFrequency,
  });

  // Retorna uma resposta de sucesso
  return { message: 'Goal created successfully!' };
});

app.post('/completion', {
  schema: {
    body: z.object({
      goalId: z.string()
    })
  }
}, async (request) => {
  const { goalId } = request.body;

  await createGoalCompletion({
    goalId
  });

});

// Inicia o servidor na porta 3333
app.listen({
  port: 3333,
}).then(() => {
  console.log("Server started on port 3333");
});
