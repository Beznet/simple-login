// Load appropriate env file if possible
try {
    let envPath = '.env'
  
    if (process.env.CI_COMMIT_REF_NAME) {
      envPath = `.${process.env.CI_COMMIT_REF_NAME}.env`
    }
  
    require('dotenv').config({ path: envPath })
  } catch (error) {}