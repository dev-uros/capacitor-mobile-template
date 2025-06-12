import type {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.mobiletemplate',
    appName: 'mobile-template',
    webDir: 'dist',
    plugins: {
        // Keyboard: {
        //     'resizeOnFullScreen': true
        // },
        EdgeToEdge: {
            "backgroundColor": "#ffffff"
        },
        CapacitorHttp: {
            enabled: true
        },
        PushNotifications: {
            "presentationOptions": ["badge", "sound", "alert"]
        }
    }
};

export default config;
