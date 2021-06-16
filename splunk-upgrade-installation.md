---
title: Splunk Upgrade Installation 
sidebar: generic
tags: [enterprise-monitoring, ICT, ITBS]
product: Splunk Upgrade
---

## Important Information:
<div class="alert alert-warning">
This was all done on a lab server.
<br> All Splunk binaries are located in /root.
</div>

### Helpful Linux Commands
| Command | Action |
|----------|---------------------|
| cd | Changes the directory your currently in. For Example, cd Documents will change your directory to the Documents directory |
| cd ~ | Changes the directory your currently in to the root directory |
| ll/ls | Lists all files in current directory |
| pwd | Show directory you are currently working in |
| rm [file_name] | Removes a file |
| rm -r [directory_name] | Removes a directory recursively |
| rm -rf [directory_name] | Recursively removes a directory without requiring confirmation |
| rpm -e [package_name.rpm] | Removes an .rmp package |



### Installation Process
<ol>
<li>Use Cygwin Terminal to connect to Server</li>
<ul><li>Then enter the command <code><span style="color:red">ssh a-EmployeeID@servername/IP</span></code></li>
<li>If this is your first time logging into the server you will be asked to accept a certificate by typing yes.</li>
<li>Lastly, you will be asked to enter your Active Directory password</li></ul>
<li>Next to begin the upgrade enter the command <code><span style="color:red">rpm -Uv /root/splunk-8.1.3-63079c59e632-Linux-2.6-x86_64.rpm</span></code></li>
<li>To Perform final migration and upgrade steps enter the command <code><span style="color:red">/opt/splunk/bin/splunk status --accept-license</span></code></li>
<li>The output from step 3 should show the output <code><span style="color:red">splunkd is not running</span></code>. To start splunk enter the command <code><span style="color:red">/opt/splunk/bin/splunk start</span></code></li>
<li>Lastly, login to Splunk using the login information from above and click on the dropdown help tab in the upper right part of the screen. Then click on about and check to see if splunk has been successfully upgraded</li> 
<li>If there is ever a need to uninstall the current version of splunk enter the command <code><span style="color:red">rpm -e splunk</span></code></li></ol>




