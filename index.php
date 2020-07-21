<?php include "header.php"; ?>
    <section class="main">
        <div class="container mt-5">
            <div class="row">

                <div class="col-md-5">
                    <div class="division_one p-3">
                        <center><span class="message text-danger"></span></center>
                        <br>
                        <h4 class="text-white font-weight-bold text-center">Add Task</h4>
                        <form id="task-form">                                
                            <div class="input-field">                                   
                                <input type="text" name="task" class="form-control" value="" placeholder="New Task" id="task">          
                            </div><br>
                            <input type="submit" id="button" value="Add Task" class="btn">
                            <br><br>                               
                        </form>
                    </div>
                </div>
                <div class="col-md-3">

                </div>
                <div class="col-md-4">
                    <div class="division_two">
                        <h3 class="text-white font-weight-bold text-center">Task List</h3>
                            
                        <ul class="collection list-unstyled"></ul>
                        <a href="" class="btn clear-tasks">Clear Task</a>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    <script src="js/app2.js"></script>
    
</body>
</html>