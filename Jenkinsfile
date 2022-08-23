pipeline {
  agent {
    docker {
      image 'node:16.17.0'
      args '-u root:root'
    }
  }

  environment {
    CYPRESS_CACHE_FOLDER = '$PWD/cy-cache-here'
  }
  stages {
    stage('Build') {
      steps {
        sh 'export CYPRESS_CACHE_FOLDER=$PWD/cy-cache-here'
        sh 'npm install --unsafe-perm=true --allow-root'
        sh 'npm build'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test:ci'
      }
    }
  }
}
