<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the tasks.
     */
    public function index()
    {
        if(request()->completed == 'true') {
            return TaskResource::collection(Task::where('completed', true)->orderByDesc('id')->get());
        } elseif (request()->completed == 'false') {
            return TaskResource::collection(Task::where('completed', false)->orderByDesc('id')->get());
        }
        return TaskResource::collection(Task::orderByDesc('id')->get());
    }

    /**
     * Store a newly created task in storage.
     */
    public function store(TaskRequest $request)
    {
        return new TaskResource(Task::create($request->validated()));
    }

    /**
     * Display the specified task.
     */
    public function show(Task $task)
    {
        return new TaskResource($task);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, Task $task)
    {
        $task->update($request->validated());
        return new TaskResource($task);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return new TaskResource($task);
    }
}
