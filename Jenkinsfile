pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 18', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
        EXPO_TOKEN = credentials('expo-token')  // Tạo token Expo trong Jenkins Credentials
    }

    stages {
        stage('Clone code') {
            steps {
                git branch: 'main', url: 'https://github.com/LiLyTampone/LilyTampone.git'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build app') {
            steps {
                sh 'eas build --platform android --non-interactive --profile production --token $EXPO_TOKEN'
            }
        }

        stage('Notify build') {
            steps {
                echo 'Bạn có thể gửi link build đến nhóm qua Slack/Email'
            }
        }
    }
}
