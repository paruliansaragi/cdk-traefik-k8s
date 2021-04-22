interface awsENV {
    account: string;
    region: string;
}
export const envEU: awsENV = {
    account: process.env.AWS_ACCOUNT_ID as string,
    region: process.env.AWS_REGION as string,
};
export const hostedZone: string = "ideaas.co.uk";
export const traefikNamespace: string = "traefik";
export const traefikBasicAuthString: string =
    "dXNlcjokYXByMSRLUVBOVXluSCRGVE50dHRZLm8uOGMwN3JwdVVRanQxCgo=";