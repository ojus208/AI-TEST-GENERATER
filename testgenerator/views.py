from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from .mcqgenerate import generate_questions_openai
from .serializers import mcqSerializer, testSerializer, gettestserializer
from .models import MCQModel, Test
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.viewsets import ModelViewSet
import datetime
# Create your views here.

@csrf_exempt
@api_view(['POST'])
def generateTestView(request):
    topic = request.data.get("topic")
    number_of_question = request.data.get("number_of_question")
    level = request.data.get("level")

    gen_data = generate_questions_openai(topic=topic, level=level, number_of_question=number_of_question)
    questions = gen_data['questions']
    q_pk = []
    for que in questions:
        serializer = mcqSerializer(data=que)
        if serializer.is_valid():
            inst = serializer.save()
            q_pk.append(inst.id)
        else:
            return Response({"data":"something bad accroud at backend try again"}, status=500)

    

    data = {
        "test_name":f'Test set of {number_of_question} on topic {topic}',
        "questions":q_pk
    }
    # print(q_pk)

    test = testSerializer(data=data)
    if test.is_valid():
        inst = test.save()
        return Response({"data":inst}, status=201)
    else:
        print("working on this part")
        return Response({"data":"please send correct formated data"}, status=400)
            
        
@api_view(['GET'])
def gettestview(request,id):
    test_set = get_object_or_404(Test, id=id)
    data = gettestserializer(test_set)
    
    return Response({"data":data.data})



@api_view(['POST'])
def start_test(request,id):
    test_set = get_object_or_404(Test, id=id)
    test_set.start_test_time = datetime.datetime.now()
    test_set.save()
    return Response({"data":{"time":test_set.start_test_time}}, status=200)


@api_view(['POST'])
def submit_test(request,id):
    test_set = get_object_or_404(Test, id=id)
    submit_time = request.data.get("sbumit_time")
    test_set.submission_test_time = submit_time
    answers = dict(request.data)['data']
    answer_num = 0
    for queid in test_set.questions.all():
        correct = queid.check_answer(answers[answer_num])
        if correct :
            test_set.test_score += 1
    
    test_set.user_submitted_answer = answers
    test_set.save()

    return Response({"data":test_set.test_score}, status=200)





    


    