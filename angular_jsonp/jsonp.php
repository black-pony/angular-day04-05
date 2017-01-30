<?php
//注意：这个代码必须要在服务器环境下面使用
$cbName = @$_GET['callback']?($_GET['callback']):'callback' ;
$arr = array("school"=>"heima","subject"=>'frontend');
echo $cbName.'('.json_encode($arr).')';