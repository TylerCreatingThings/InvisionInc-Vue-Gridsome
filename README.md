# General Contracting Construction Website

Built with Vuejs, Gridsome, and Vuetify.

If you are trying to run a Gridsome application using Vuetify this Nodejs dependency list will help. 

Originally this website was written with just Vuejs, and Vuetify.

Its been re-written in Gridsome for optimization and upgraded to the latest Nodejs version.

Also later versions of Nodejs don't have support for an encryption algorithm that is used in some of the packages, so this command needs to be run before you run build, develop, or deploy locally. For CICD it to work as expected.

SET NODE_OPTIONS=--openssl-legacy-provider && 

