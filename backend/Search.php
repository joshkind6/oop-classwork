<?php

require_once "Nation.php";
require_once "Data.php";

header("Content-Type: application/json");

if (isset($_GET["mineral"])) {

    $search = strtolower($_GET["mineral"]);
    $result = [];

    foreach ($states as $state) {

        foreach ($state->minerals as $mineral) {

            if (strtolower($mineral) === $search) {
                $result[] = $state->toArray();
                break;
            }
        }
    }

    echo json_encode($result, JSON_PRETTY_PRINT);

} else {

    $data = [];

    foreach ($states as $state) {
        $data[] = $state->toArray();
    }

    echo json_encode($data, JSON_PRETTY_PRINT);
}