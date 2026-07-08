<?php
class NigeriaState
{
    public $name;
    public $capital;
    public $minerals;

    public function __construct($name, $capital, $minerals = [])
    {
        $this->name = $name;
        $this->capital = $capital;
        $this->minerals = $minerals;
    }

    public function toArray()
    {
        return [
            "state" => $this->name,
            "capital" => $this->capital,
            "minerals" => $this->minerals
        ];
    }
}