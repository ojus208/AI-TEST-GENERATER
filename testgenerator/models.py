
from pyexpat import model
from django.db import models

# Create your models here.

# class option(models.Model):
#     id = models.BigAutoField(primary_key=True)
#     name = models.CharField(max_length=499)
#     is_correct = models.BooleanField(default=False)

#     def __str__(self) -> str:
#         return self.name
    
    

class MCQModel(models.Model):
    id = models.BigAutoField(primary_key=True)
    question = models.TextField()
    option1 = models.CharField(max_length=499) 
    option2 = models.CharField(max_length=499) 
    option3 = models.CharField(max_length=499) 
    option4 = models.CharField(max_length=499, default="")
    answer = models.CharField(max_length=499) 

    def check_answer(self, provided_ans):
        if provided_ans[0] == self.answer or provided_ans[1] == self.answer:
            return {self.answer, True}
        return { self.answer, False}

    def __str__(self):
        return str(self.id)



class Test(models.Model):


    id = models.BigAutoField(primary_key=True)
    test_name = models.CharField(max_length=499, default="")
    questions = models.ManyToManyField(MCQModel, blank=True)
    generated_Date = models.DateTimeField(auto_now_add=True)
    start_test_time = models.DateTimeField(blank=True, null=True)
    submission_test_time = models.DateTimeField(blank=True, null=True)
    test_score = models.CharField(max_length=9, blank=True, null=True)
    user_submitted_answer = models.TextField(blank=True, null=True)
    def __str__(self):
        return self.test_name

    


    