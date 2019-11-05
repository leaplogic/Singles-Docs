(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{242:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"common-issues-workarounds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common-issues-workarounds","aria-hidden":"true"}},[s._v("#")]),s._v(" Common Issues & Workarounds")]),s._v(" "),e("p",[s._v("This section covers common issues and workarounds for "),e("a",{attrs:{href:"https://github.com/leaplogic/singles/tree/v3",target:"_blank",rel:"noopener noreferrer"}},[s._v("Singles v3"),e("OutboundLink")],1),s._v(". Singles v2 FAQ can be found "),e("router-link",{attrs:{to:"/faq/craft2/"}},[s._v("here")]),s._v(".")],1),s._v(" "),e("h2",{attrs:{id:"docker-build-errors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-build-errors","aria-hidden":"true"}},[s._v("#")]),s._v(" Docker Build Errors")]),s._v(" "),e("p",[s._v("needs content")]),s._v(" "),e("h2",{attrs:{id:"ports-in-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ports-in-use","aria-hidden":"true"}},[s._v("#")]),s._v(" Ports in Use")]),s._v(" "),e("p",[s._v("By default, "),e("code",[s._v("docker-compose.yml")]),s._v(" configures the web server and MySQL services to run locally on the default ports. It's not uncommon for other local programs and services to block up these ports and it's often necessary to point the docker containers to interface with other open local ports.")]),s._v(" "),e("p",[s._v("First, let's look at a snippet of "),e("code",[s._v("docker-compose.yml")]),s._v(" where the ports are being set.")]),s._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nginx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./docker/nginx"')]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" llnet\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token datetime number"}},[s._v("80:80")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./docker/nginx/nginx.conf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/nginx/nginx.conf\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./log"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/log/nginx\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./web"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/www/web"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("cached\n\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mysql-server")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" llnet\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3306:3306"')]),s._v("\n")])])]),e("p",[s._v("To use a different port locally, change the first number in the port assignment from")]),s._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3306:3306"')]),s._v("\n")])])]),e("p",[s._v("to")]),s._v(" "),e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3310:3306"')]),s._v("\n")])])]),e("p",[s._v("In this example, the local port was changed to "),e("code",[s._v("3310")]),s._v(" but, you can use any port you prefer. You can do the same thing for the nginx service port configuration.")]),s._v(" "),e("h2",{attrs:{id:"bypassing-php-composer-locally"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bypassing-php-composer-locally","aria-hidden":"true"}},[s._v("#")]),s._v(" Bypassing PHP & Composer locally")]),s._v(" "),e("p",[s._v("You can bypass relying on PHP & Composer locally by bashing into the PHP instance and installing the dependencies on the machine. This is especially useful if you're having trouble installing/configuring PHP on Windows or don't want to enable some required PHP libraries required for Composer.")]),s._v(" "),e("p",[s._v("To begin, make sure the containers are up and running")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])])]),e("p",[s._v("which should output your running containers and should look something like")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES\nfb375a8fc127        singles_php         "docker-php-entrypoi…"   5 seconds ago       Up 3 seconds        0.0.0.0:9000->9000/tcp              singles_php_1\n2ebf3ce48448        mysql:5.7           "docker-entrypoint.s…"   5 seconds ago       Up 3 seconds        33060/tcp, 0.0.0.0:3306->3306/tcp   singles_mysql-server_1\n6aaa917fcdf0        singles_nginx       "nginx"                  5 seconds ago       Up 3 seconds        0.0.0.0:80->80/tcp                  singles_nginx_1\n')])])]),e("p",[s._v("Once you've verified your containers are running, you can bash directly into the php service by running")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("docker "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it singles_php_1 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),e("p",[s._v("where "),e("code",[s._v("singles_php_1")]),s._v(" is the "),e("code",[s._v("NAME")]),s._v(" of your singles_php image.")]),s._v(" "),e("p",[s._v("After bashing into the instance, by default, you should be dropped into the document root of singles, "),e("code",[s._v("/var/www/")]),s._v(". From there, install the dependencies laid out in the composer.json by running")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("composer "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),e("p",[s._v("After installation completes, you can exit the shell.")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])])]),e("p",[s._v("Composer has now installed the required packages and set up autoloading that's required for Singles to run!")])])}),[],!1,null,null,null);t.default=n.exports}}]);