
import { z } from 'zod';

export const contactFormSchema = z.object({
  nome: z.string().nonempty("O nome é obrigatório"),
  email: z.string().email("Digite um email válido")
});