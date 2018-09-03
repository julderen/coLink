import { Service } from 'typedi';
import mail from '@sendgrid/mail';
import { IMailsService } from 'abstractions/services';
import templates from 'templates';

@Service()
class MailService implements IMailsService {
  public sendMail(to: string, subject: string, data: object): Promise<null> {
    mail.setApiKey(process.env.MAIL_API_KEY);

    const message = {
      subject,
      to,
      from: 'co-link@info.com',
      html: templates.createUser(data)
    };

    mail.send(message);

    return null;
  }
}

export default MailService;
