<?php
// Use in the “Post-Receive URLs” section of your GitHub repo.
if ( $_POST['payload'] ) {
   shell_exec('cd ~/public_html/bpaciniengineering.org && git fetch && git reset --hard origin/build');
}
