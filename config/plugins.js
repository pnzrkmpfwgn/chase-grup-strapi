module.exports = ({ env }) => ({
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: env('GCS_BUCKET_NAME'),
            publicFiles: env('GCS_PUBLIC_FILES'),
            uniform:env('GCS_UNIFORM'),
            serviceAccount: env.json('GCS_SERVICE_ACCOUNT'),
            baseUrl: env('GCS_BASE_URL'),
            basePath:env('GCS_BASE_PATH'),
        }
    }
})