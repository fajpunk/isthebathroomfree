(defproject itbf-web "1.0.0"
  :description "Is the bathroom free?"
  :url "http://isthebathroomfree.com"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2234"]
                 [om "0.6.4"]
                 [com.cemerick/piggieback "0.1.3"]
                 [weasel "0.2.0"]
                 [http-kit "2.1.16"]
                 [compojure "1.1.8"]
                 [ring "1.3.0"]
                 [clj-http "0.9.2"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [environ "0.5.0"]]

  :main itbf-web.core
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-environ "0.5.0"]]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :source-paths ["src/clj" "src/cljs"]

  :cljsbuild { 
    :builds [{:id "dev"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/itbf_web.js"
                :output-dir "resources/public/out"
                :optimizations :none
                :source-map true}}]})
