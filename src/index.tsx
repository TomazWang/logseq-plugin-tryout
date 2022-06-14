import '@logseq/libs';

const main = async () => {
    console.log('plugin-tryout before load');

    window.setTimeout(async () => {
        logseq.App.registerCommandPalette(
            {
                key: 'p-tryout-cmd1',
                label: 'Command Try out',
            },
            () => {
                logseq.App.showMsg('❤️ Message from Hello World Plugin :)');
            }
        );
    }, 500);
    console.log('plugin-tryout loaded');

    console.log(`info = ${JSON.stringify(logseq.App.getInfo())}`);
};

logseq.ready(main).catch(console.error);
