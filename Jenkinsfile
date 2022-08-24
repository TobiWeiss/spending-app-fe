pipeline {
  agent {
    docker {
      image 'node:16.17.0'
      args '-u root:root'
    }
  }

  environment {
    CYPRESS_CACHE_FOLDER = '$PWD/cy-cache-here'
    CHROME_BIN = '/usr/bin/chromium-browser'
  }
  stages {
    /* stage('Build') {
       steps {
         sh 'npm install'
         sh 'npm run build'
       }
     }*/
    stage('Test') {
      steps {
        sh 'RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \\\n' +
          '    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
        sh '# Install Chrome.\n' +
          'RUN apt-get update && apt-get -y install google-chrome-stable .'
        sh 'npm run test:ci'
      }
    }
  }
}
