import { REST, Routes } from "discord.js";
const commands = [
  {
    name: "create",
    description: "Creates a new short URL",
  },
]; 

const rest = new REST({ version: "10" }).setToken(
  "MTM2NDUwMjU2NDEwMzY1NTQzNQ.Gb9Qfg.I5WJY6aNgvG6f0XsemSumImNLPNb5A3mY1Vb7k"
);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1364502564103655435"), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
