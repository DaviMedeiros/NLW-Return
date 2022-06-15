"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const submit_feedback_use_case_1 = require("./submit-feedback-use-case");
// spies = espiões (Servem para saber se funções foram chamadas)
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
const submitFeedback = new submit_feedback_use_case_1.SubmitFeedbackUseCase(
// Crio as dependências na mão pq tem que ser desacoblado da original, senão não é teste unitário
{ create: createFeedbackSpy }, { sendMail: sendMailSpy });
describe('Submit feedback', () => {
    // Pode ser escrito como test('');
    // Isso deveria ser possivel enviar um feedback
    it('should be able to submit a feedback', async () => {
        // Espero (expect) que execute (execute) e que resolva(resolves) sem (not) dar erros (toThrow)
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64+5464156123156'
        })).resolves.not.toThrow();
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
    it('should not be able to submit a feedback whithout Type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'exemple comment',
            screenshot: 'data:image/png;base64+5464156123156'
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback whithout Comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64+5464156123156'
        })).rejects.toThrow();
    });
    it('should not be able to submit a feedback whith an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'exemple comment',
            screenshot: 'test.jpg'
        })).rejects.toThrow();
    });
});
