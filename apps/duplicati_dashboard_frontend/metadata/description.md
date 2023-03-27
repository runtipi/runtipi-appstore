# Duplicati dashboard

#### [](https://github.com/MarcOrfilaCarreras/duplicati-dashboard#-a-simple-dashboard-for-monitoring-you-duplicati-instances)A simple DASHBOARD for monitoring you Duplicati instances

### [](https://github.com/MarcOrfilaCarreras/duplicati-dashboard#configuration)Configuration

In order to use this software, you will need to add two options to your Duplicati instance.

-   The first option is **send-http-result-output-format**, which will be set to **JSON**.
    
-   The other one is **send-http-url** which will be set to **[http://host:port/api/tasks/add?host=id](https://github.com/MarcOrfilaCarreras/duplicati-dashboardhttp://host:port/api/tasks/add?host=id)**, where **host** is the IP address of the server running the backend, port is the **port** number of the backend and **id** is the unique identifier of the host in the backend.
    

  

## [](https://github.com/MarcOrfilaCarreras/duplicati-dashboard#hammer-roadmap)🔨 Roadmap

-   [x]  Add historical data
-   [x]  Add some charts

See the [open issues](https://github.com/MarcOrfilaCarreras/duplicati-dashboard/issues) for a full list of proposed features (and known issues).