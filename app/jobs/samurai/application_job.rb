require "good_job/engine"

module Samurai
  class ApplicationJob < ActiveJob::Base
    include GoodJob::ActiveJobExtensions::Concurrency
    good_job_control_concurrency_with(
      # Maximum number of unfinished jobs to allow with the concurrency key
      # Can be an Integer or Lambda/Proc that is invoked in the context of the job
      total_limit: 1,

      # Or, if more control is needed:
      # Maximum number of jobs with the concurrency key to be
      # concurrently enqueued (excludes performing jobs)
      # Can be an Integer or Lambda/Proc that is invoked in the context of the job
      enqueue_limit: 2,

      # Maximum number of jobs with the concurrency key to be
      # concurrently performed (excludes enqueued jobs)
      # Can be an Integer or Lambda/Proc that is invoked in the context of the job
      perform_limit: 1,

      # Note: Under heavy load, the total number of jobs may exceed the
      # sum of `enqueue_limit` and `perform_limit` because of race conditions
      # caused by imperfectly disjunctive states. If you need to constrain
      # the total number of jobs, use `total_limit` instead. See #378.

      # A unique key to be globally locked against.
      # Can be String or Lambda/Proc that is invoked in the context of the job.
      # Note: Arguments passed to #perform_later can be accessed through ActiveJob's `arguments` method
      # which is an array containing positional arguments and, optionally, a kwarg hash.
      key: -> { "Unique-#{arguments.first}-#{arguments.last[:version]}" }, #  MyJob.perform_later("Alice", version: 'v2') => "Unique-Alice-v2"
    )
  end
end
