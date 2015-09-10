module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["less"]
                },
                files: {
                    "css/repentless.css": "less/repentless.less"
                }
            }
        },
        watch: {
            files: [
                "less/*.less"
            ],
            tasks: ["less"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};