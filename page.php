<?php
include("header.php");
$page = $_GET["content"];
if ($page != "about" && $page != "projects" && $page != "contact") {
	include("404.html");
}
include("footer.php");
?>