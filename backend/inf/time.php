<?php

class Time
{
    public static function now()
    {
        //This is bullshit, it's recomended way to Unix timestamp from PHP  - pathetic
        list($usec, $sec) = explode(" ", microtime());
        return ((int) $usec + (int) $sec);
    }
}
