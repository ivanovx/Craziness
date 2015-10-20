module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["less"],
					          compress: true
                },
                files: {
                    "css/craziness.css": "less/craziness.less"
                }
            }
        },
        watch: {
            less :{
                files: [
                    "less/*.less"
                ],
                tasks: ["less"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
};
