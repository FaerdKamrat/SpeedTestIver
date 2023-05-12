import json 
import sys



def main():
    raw_data = sys.argv[1]
    print(type(raw_data))
    json_object = json.loads(raw_data)
    print(type(json_object))
    pass
def drawGraph():
    pass




if __name__ == '__main__':
    main()