interface IMailsService {
  sendMail(to: string, subject: string, data: object): Promise<null>;
}

// rollup fix
declare const IMailsService: IMailsService;

export default IMailsService;
