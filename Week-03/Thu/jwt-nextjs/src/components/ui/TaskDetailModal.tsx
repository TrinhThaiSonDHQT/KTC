'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Flag, User } from 'lucide-react';
import type { Task } from '@/types/index';

interface TaskDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
}

export default function TaskDetailModal({
  isOpen,
  onClose,
  task,
}: TaskDetailModalProps) {
  if (!task) return null;

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl">{task.title}</DialogTitle>
          <DialogDescription>Task details and information</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(task.status)}>
              {task.status.replace('-', ' ')}
            </Badge>
            <Badge className={getPriorityColor(task.priority)}>
              {task.priority} priority
            </Badge>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-gray-700 mb-2">
                Description
              </h4>
              <p className="text-gray-900 leading-relaxed">
                {task.description || 'No description provided'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">Due Date:</span>
                <span className="font-medium">
                  {new Date(task.dueDate).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Flag className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">Priority:</span>
                <span className="font-medium capitalize">{task.priority}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">Created:</span>
                <span className="font-medium">
                  {new Date(task.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-gray-700">Updated:</span>
                <span className="font-medium">
                  {new Date(task.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Task ID: {task.id}</span>
              <span>Status: {task.status.replace('-', ' ')}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
