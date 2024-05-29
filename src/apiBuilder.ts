export class APIBuilder {
    private static DOMAIN_URL = 'https://api.escuelajs.co/';
    private static API_POSTFIX = 'api/';
    private static API_VERSION = 'v1/';
    

    public static getEndpoint(endpoint: string) {
        return this.DOMAIN_URL + this.API_POSTFIX + this.API_VERSION + endpoint;
    }

}
