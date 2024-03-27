<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if the user is authenticated and has the role of "admin"
        if ($request->user() && $request->user()->role === 'admin') {
            return $next($request);
        }

        // If not admin, redirect to dashboard with a message
        return redirect('/dashboard')->with('error', 'You do not have access to this page.');
    }
}
