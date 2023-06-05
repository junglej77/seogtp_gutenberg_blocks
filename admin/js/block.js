document.addEventListener('DOMContentLoaded', function () {
    wp.data.subscribe(function () {
        const toolbarLeftContainer = document.querySelector('.edit-post-header-toolbar');
        const toolbarRightContainer = document.querySelector('.interface-pinned-items');

        if (toolbarLeftContainer && toolbarLeftContainer.querySelector('.seogtp_gutenberg_blocks_library') === null) {
            const myButton = document.createElement('button');
            myButton.classList.add('seogtp_gutenberg_blocks_library');
            myButton.textContent = 'Design Library';

            toolbarLeftContainer.appendChild(myButton);
        }
        if (toolbarRightContainer && toolbarRightContainer.querySelector('.seogtp_gutenberg_blocks_setting') === null) {
            const myButton = document.createElement('button');
            myButton.classList.add('seogtp_gutenberg_blocks_setting');
            myButton.textContent = 'set';

            toolbarRightContainer.appendChild(myButton);
        }
    });
});
